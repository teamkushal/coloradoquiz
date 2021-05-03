import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2940Component } from './test-component2940.component';

describe('TestComponent2940Component', () => {
  let component: TestComponent2940Component;
  let fixture: ComponentFixture<TestComponent2940Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2940Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2940Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
