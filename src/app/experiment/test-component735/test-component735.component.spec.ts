import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComponent735Component } from './test-component735.component';

describe('TestComponent735Component', () => {
  let component: TestComponent735Component;
  let fixture: ComponentFixture<TestComponent735Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestComponent735Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent735Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
