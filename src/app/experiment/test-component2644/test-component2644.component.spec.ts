import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2644Component } from './test-component2644.component';

describe('TestComponent2644Component', () => {
  let component: TestComponent2644Component;
  let fixture: ComponentFixture<TestComponent2644Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2644Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2644Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
