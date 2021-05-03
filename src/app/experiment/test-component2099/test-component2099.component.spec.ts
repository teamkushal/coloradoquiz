import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2099Component } from './test-component2099.component';

describe('TestComponent2099Component', () => {
  let component: TestComponent2099Component;
  let fixture: ComponentFixture<TestComponent2099Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2099Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2099Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
