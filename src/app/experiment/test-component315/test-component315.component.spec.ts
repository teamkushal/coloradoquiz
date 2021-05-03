import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent315Component } from './test-component315.component';

describe('TestComponent315Component', () => {
  let component: TestComponent315Component;
  let fixture: ComponentFixture<TestComponent315Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent315Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
