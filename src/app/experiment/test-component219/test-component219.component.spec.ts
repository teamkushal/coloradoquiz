import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent219Component } from './test-component219.component';

describe('TestComponent219Component', () => {
  let component: TestComponent219Component;
  let fixture: ComponentFixture<TestComponent219Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent219Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent219Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
