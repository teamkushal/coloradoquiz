import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent458Component } from './test-component458.component';

describe('TestComponent458Component', () => {
  let component: TestComponent458Component;
  let fixture: ComponentFixture<TestComponent458Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent458Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent458Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
