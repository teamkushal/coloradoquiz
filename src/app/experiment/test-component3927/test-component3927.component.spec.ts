import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3927Component } from './test-component3927.component';

describe('TestComponent3927Component', () => {
  let component: TestComponent3927Component;
  let fixture: ComponentFixture<TestComponent3927Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3927Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
