import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent626Component } from './test-component626.component';

describe('TestComponent626Component', () => {
  let component: TestComponent626Component;
  let fixture: ComponentFixture<TestComponent626Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent626Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
