import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent789Component } from './test-component789.component';

describe('TestComponent789Component', () => {
  let component: TestComponent789Component;
  let fixture: ComponentFixture<TestComponent789Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent789Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent789Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
