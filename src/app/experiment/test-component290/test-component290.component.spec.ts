import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent290Component } from './test-component290.component';

describe('TestComponent290Component', () => {
  let component: TestComponent290Component;
  let fixture: ComponentFixture<TestComponent290Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent290Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent290Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
