import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2336Component } from './test-component2336.component';

describe('TestComponent2336Component', () => {
  let component: TestComponent2336Component;
  let fixture: ComponentFixture<TestComponent2336Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2336Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2336Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
