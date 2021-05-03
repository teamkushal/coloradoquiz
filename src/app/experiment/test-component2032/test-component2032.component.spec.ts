import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2032Component } from './test-component2032.component';

describe('TestComponent2032Component', () => {
  let component: TestComponent2032Component;
  let fixture: ComponentFixture<TestComponent2032Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2032Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2032Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
