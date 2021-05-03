import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2001Component } from './test-component2001.component';

describe('TestComponent2001Component', () => {
  let component: TestComponent2001Component;
  let fixture: ComponentFixture<TestComponent2001Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2001Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2001Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
