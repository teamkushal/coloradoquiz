import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent162Component } from './test-component162.component';

describe('TestComponent162Component', () => {
  let component: TestComponent162Component;
  let fixture: ComponentFixture<TestComponent162Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent162Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent162Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
