import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2580Component } from './test-component2580.component';

describe('TestComponent2580Component', () => {
  let component: TestComponent2580Component;
  let fixture: ComponentFixture<TestComponent2580Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2580Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2580Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
