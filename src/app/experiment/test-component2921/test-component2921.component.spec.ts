import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2921Component } from './test-component2921.component';

describe('TestComponent2921Component', () => {
  let component: TestComponent2921Component;
  let fixture: ComponentFixture<TestComponent2921Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2921Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2921Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
