import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3632Component } from './test-component3632.component';

describe('TestComponent3632Component', () => {
  let component: TestComponent3632Component;
  let fixture: ComponentFixture<TestComponent3632Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3632Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3632Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
