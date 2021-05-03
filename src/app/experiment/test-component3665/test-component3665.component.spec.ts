import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3665Component } from './test-component3665.component';

describe('TestComponent3665Component', () => {
  let component: TestComponent3665Component;
  let fixture: ComponentFixture<TestComponent3665Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3665Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3665Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
