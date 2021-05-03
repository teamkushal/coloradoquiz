import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3992Component } from './test-component3992.component';

describe('TestComponent3992Component', () => {
  let component: TestComponent3992Component;
  let fixture: ComponentFixture<TestComponent3992Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3992Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
