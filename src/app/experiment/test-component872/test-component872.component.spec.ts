import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent872Component } from './test-component872.component';

describe('TestComponent872Component', () => {
  let component: TestComponent872Component;
  let fixture: ComponentFixture<TestComponent872Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent872Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
