import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3959Component } from './test-component3959.component';

describe('TestComponent3959Component', () => {
  let component: TestComponent3959Component;
  let fixture: ComponentFixture<TestComponent3959Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3959Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3959Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
