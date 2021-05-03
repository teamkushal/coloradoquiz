import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent425Component } from './test-component425.component';

describe('TestComponent425Component', () => {
  let component: TestComponent425Component;
  let fixture: ComponentFixture<TestComponent425Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent425Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
