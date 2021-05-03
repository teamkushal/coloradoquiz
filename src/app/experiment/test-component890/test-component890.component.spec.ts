import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent890Component } from './test-component890.component';

describe('TestComponent890Component', () => {
  let component: TestComponent890Component;
  let fixture: ComponentFixture<TestComponent890Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent890Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent890Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
