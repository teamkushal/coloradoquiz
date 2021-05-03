import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent320Component } from './test-component320.component';

describe('TestComponent320Component', () => {
  let component: TestComponent320Component;
  let fixture: ComponentFixture<TestComponent320Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent320Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
