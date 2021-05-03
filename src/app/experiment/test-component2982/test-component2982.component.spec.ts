import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2982Component } from './test-component2982.component';

describe('TestComponent2982Component', () => {
  let component: TestComponent2982Component;
  let fixture: ComponentFixture<TestComponent2982Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2982Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2982Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
