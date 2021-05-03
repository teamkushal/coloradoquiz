import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent137Component } from './test-component137.component';

describe('TestComponent137Component', () => {
  let component: TestComponent137Component;
  let fixture: ComponentFixture<TestComponent137Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent137Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent137Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
