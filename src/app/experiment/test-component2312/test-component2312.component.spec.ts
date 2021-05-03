import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2312Component } from './test-component2312.component';

describe('TestComponent2312Component', () => {
  let component: TestComponent2312Component;
  let fixture: ComponentFixture<TestComponent2312Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2312Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
