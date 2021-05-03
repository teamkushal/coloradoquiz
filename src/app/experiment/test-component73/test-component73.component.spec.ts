import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent73Component } from './test-component73.component';

describe('TestComponent73Component', () => {
  let component: TestComponent73Component;
  let fixture: ComponentFixture<TestComponent73Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent73Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent73Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
