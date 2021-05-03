import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent575Component } from './test-component575.component';

describe('TestComponent575Component', () => {
  let component: TestComponent575Component;
  let fixture: ComponentFixture<TestComponent575Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent575Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
