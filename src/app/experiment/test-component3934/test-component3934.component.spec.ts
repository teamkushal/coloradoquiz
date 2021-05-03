import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3934Component } from './test-component3934.component';

describe('TestComponent3934Component', () => {
  let component: TestComponent3934Component;
  let fixture: ComponentFixture<TestComponent3934Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3934Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3934Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
