import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent953Component } from './test-component953.component';

describe('TestComponent953Component', () => {
  let component: TestComponent953Component;
  let fixture: ComponentFixture<TestComponent953Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent953Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent953Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
