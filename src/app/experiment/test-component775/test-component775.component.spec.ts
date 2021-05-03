import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent775Component } from './test-component775.component';

describe('TestComponent775Component', () => {
  let component: TestComponent775Component;
  let fixture: ComponentFixture<TestComponent775Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent775Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent775Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
