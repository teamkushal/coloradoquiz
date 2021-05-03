import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent713Component } from './test-component713.component';

describe('TestComponent713Component', () => {
  let component: TestComponent713Component;
  let fixture: ComponentFixture<TestComponent713Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent713Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent713Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
