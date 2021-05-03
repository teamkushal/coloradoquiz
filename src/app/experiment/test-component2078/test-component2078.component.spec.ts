import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2078Component } from './test-component2078.component';

describe('TestComponent2078Component', () => {
  let component: TestComponent2078Component;
  let fixture: ComponentFixture<TestComponent2078Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2078Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2078Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
