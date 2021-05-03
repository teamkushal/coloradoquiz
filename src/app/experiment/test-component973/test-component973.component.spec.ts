import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent973Component } from './test-component973.component';

describe('TestComponent973Component', () => {
  let component: TestComponent973Component;
  let fixture: ComponentFixture<TestComponent973Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent973Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent973Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
