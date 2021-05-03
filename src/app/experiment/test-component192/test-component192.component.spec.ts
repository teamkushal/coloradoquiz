import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent192Component } from './test-component192.component';

describe('TestComponent192Component', () => {
  let component: TestComponent192Component;
  let fixture: ComponentFixture<TestComponent192Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent192Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent192Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
