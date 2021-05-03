import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent754Component } from './test-component754.component';

describe('TestComponent754Component', () => {
  let component: TestComponent754Component;
  let fixture: ComponentFixture<TestComponent754Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent754Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent754Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
