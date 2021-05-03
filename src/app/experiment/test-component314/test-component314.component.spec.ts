import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent314Component } from './test-component314.component';

describe('TestComponent314Component', () => {
  let component: TestComponent314Component;
  let fixture: ComponentFixture<TestComponent314Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent314Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent314Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
