import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent104Component } from './test-component104.component';

describe('TestComponent104Component', () => {
  let component: TestComponent104Component;
  let fixture: ComponentFixture<TestComponent104Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent104Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent104Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
