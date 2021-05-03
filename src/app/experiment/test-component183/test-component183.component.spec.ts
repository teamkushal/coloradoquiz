import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent183Component } from './test-component183.component';

describe('TestComponent183Component', () => {
  let component: TestComponent183Component;
  let fixture: ComponentFixture<TestComponent183Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent183Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent183Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
