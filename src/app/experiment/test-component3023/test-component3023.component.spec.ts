import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3023Component } from './test-component3023.component';

describe('TestComponent3023Component', () => {
  let component: TestComponent3023Component;
  let fixture: ComponentFixture<TestComponent3023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3023Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
