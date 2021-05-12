import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderIoComponent } from './loader-io.component';

describe('LoaderIoComponent', () => {
  let component: LoaderIoComponent;
  let fixture: ComponentFixture<LoaderIoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderIoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderIoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
