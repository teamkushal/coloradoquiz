import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent557Component } from './test-component557.component';

describe('TestComponent557Component', () => {
  let component: TestComponent557Component;
  let fixture: ComponentFixture<TestComponent557Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent557Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
