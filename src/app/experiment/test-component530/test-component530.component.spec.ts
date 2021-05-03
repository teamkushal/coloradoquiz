import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent530Component } from './test-component530.component';

describe('TestComponent530Component', () => {
  let component: TestComponent530Component;
  let fixture: ComponentFixture<TestComponent530Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent530Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent530Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
