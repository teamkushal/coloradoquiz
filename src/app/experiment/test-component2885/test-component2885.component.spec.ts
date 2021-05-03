import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2885Component } from './test-component2885.component';

describe('TestComponent2885Component', () => {
  let component: TestComponent2885Component;
  let fixture: ComponentFixture<TestComponent2885Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2885Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2885Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
