import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent123Component } from './test-component123.component';

describe('TestComponent123Component', () => {
  let component: TestComponent123Component;
  let fixture: ComponentFixture<TestComponent123Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent123Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent123Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
