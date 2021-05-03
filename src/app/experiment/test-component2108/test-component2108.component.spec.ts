import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2108Component } from './test-component2108.component';

describe('TestComponent2108Component', () => {
  let component: TestComponent2108Component;
  let fixture: ComponentFixture<TestComponent2108Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2108Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2108Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
