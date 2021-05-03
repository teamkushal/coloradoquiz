import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent932Component } from './test-component932.component';

describe('TestComponent932Component', () => {
  let component: TestComponent932Component;
  let fixture: ComponentFixture<TestComponent932Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent932Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent932Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
