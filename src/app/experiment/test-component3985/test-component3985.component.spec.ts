import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3985Component } from './test-component3985.component';

describe('TestComponent3985Component', () => {
  let component: TestComponent3985Component;
  let fixture: ComponentFixture<TestComponent3985Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3985Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3985Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
