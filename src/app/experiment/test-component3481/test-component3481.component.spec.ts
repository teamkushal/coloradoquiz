import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent3481Component } from './test-component3481.component';

describe('TestComponent3481Component', () => {
  let component: TestComponent3481Component;
  let fixture: ComponentFixture<TestComponent3481Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent3481Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent3481Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
