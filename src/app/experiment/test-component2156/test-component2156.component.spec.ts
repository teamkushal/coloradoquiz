import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent2156Component } from './test-component2156.component';

describe('TestComponent2156Component', () => {
  let component: TestComponent2156Component;
  let fixture: ComponentFixture<TestComponent2156Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent2156Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent2156Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
