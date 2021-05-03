import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3245Component } from './test-component3245.component';

describe('TestComponent3245Component', () => {
  let component: TestComponent3245Component;
  let fixture: ComponentFixture<TestComponent3245Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3245Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3245Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
