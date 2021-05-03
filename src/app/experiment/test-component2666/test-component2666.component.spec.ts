import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2666Component } from './test-component2666.component';

describe('TestComponent2666Component', () => {
  let component: TestComponent2666Component;
  let fixture: ComponentFixture<TestComponent2666Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2666Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2666Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
